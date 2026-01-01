import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  service?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Initialize Resend client (lazy load to avoid build-time errors)
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: "Veuillez remplir tous les champs obligatoires." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Adresse email invalide." },
        { status: 400 }
      );
    }

    // Send email via Resend
    const { error } = await resend.emails.send({
      from: "Iron Steel <contact@ironsteel.fr>",
      to: [process.env.CONTACT_EMAIL || "contact@ironsteel.fr"],
      replyTo: body.email,
      subject: `[Demande de devis] ${body.subject}`,
      html: `
        <h2>Nouvelle demande de devis</h2>
        <p><strong>Nom :</strong> ${body.name}</p>
        <p><strong>Email :</strong> ${body.email}</p>
        ${body.phone ? `<p><strong>Téléphone :</strong> ${body.phone}</p>` : ""}
        ${body.service ? `<p><strong>Service :</strong> ${body.service}</p>` : ""}
        <p><strong>Sujet :</strong> ${body.subject}</p>
        <hr />
        <p><strong>Message :</strong></p>
        <p>${body.message.replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi du message. Veuillez réessayer." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message:
          "Votre message a bien été envoyé. Nous vous répondrons rapidement.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
