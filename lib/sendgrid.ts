import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export interface FormSubmission {
  type: "assessment" | "contact" | "guide" | "newsletter";
  data: Record<string, string>;
}

const TO = "nate@dev.co";
const FROM = { name: "RBOT", email: "noreply@dev.co" };

export async function sendFormEmail(submission: FormSubmission) {
  const { type, data } = submission;

  let subject: string;
  let html: string;

  if (type === "assessment") {
    subject = `New Robotics Assessment Request — ${data.company || "Unknown Company"}`;
    html = `
      <h2>New Assessment Request</h2>
      <table cellpadding="6" cellspacing="0" style="font-family:sans-serif;font-size:14px;">
        <tr><td><strong>Name</strong></td><td>${data.firstName} ${data.lastName}</td></tr>
        <tr><td><strong>Email</strong></td><td>${data.email}</td></tr>
        <tr><td><strong>Company</strong></td><td>${data.company}</td></tr>
        <tr><td><strong>Industry</strong></td><td>${data.industry}</td></tr>
        <tr><td><strong>Employees in workflow</strong></td><td>${data.employees}</td></tr>
      </table>
    `;
  } else if (type === "contact") {
    subject = `RBOT Contact Form — ${data.company || data.name}`;
    html = `
      <h2>New Contact Form Submission</h2>
      <table cellpadding="6" cellspacing="0" style="font-family:sans-serif;font-size:14px;">
        <tr><td><strong>Name</strong></td><td>${data.name}</td></tr>
        <tr><td><strong>Email</strong></td><td>${data.email}</td></tr>
        <tr><td><strong>Company</strong></td><td>${data.company}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${data.phone || "—"}</td></tr>
        <tr><td><strong>Industry</strong></td><td>${data.industry || "—"}</td></tr>
        <tr><td><strong>Message</strong></td><td style="white-space:pre-wrap">${data.message}</td></tr>
      </table>
    `;
  } else if (type === "guide") {
    subject = `Guide Download Request — ${data.company}`;
    html = `
      <h2>Guide Download Request</h2>
      <table cellpadding="6" cellspacing="0" style="font-family:sans-serif;font-size:14px;">
        <tr><td><strong>Name</strong></td><td>${data.name}</td></tr>
        <tr><td><strong>Email</strong></td><td>${data.email}</td></tr>
        <tr><td><strong>Company</strong></td><td>${data.company}</td></tr>
      </table>
    `;
  } else {
    subject = `RBOT Newsletter Signup — ${data.email}`;
    html = `<p>New newsletter signup: <strong>${data.email}</strong></p>`;
  }

  await sgMail.send({
    to: TO,
    from: FROM,
    subject,
    html,
    replyTo: data.email,
  });
}
