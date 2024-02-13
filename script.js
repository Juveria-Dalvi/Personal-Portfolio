// Hire Me Button functionality starts here
// Get the "Hire Me" button element
const hireMeButton = document.getElementById('hireMeButton');

// Replace with your actual email address
const emailAddress = 'juveriadalvi4@gmail.com';

// Define the email template
const subject = 'Invitation for Interview - Impressed by Your Portfolio';
const body = `Dear [Your Name],

I trust this message finds you well. We recently had the opportunity to review your impressive portfolio, and we are genuinely interested in exploring the possibility of working together.

Your showcased skills and experiences strongly resonate with what we are looking for in a candidate. We believe your unique talents could make a significant impact on our team.

Would you be available for an interview to discuss your portfolio in more detail and explore how your expertise aligns with our organization's goals? We are eager to learn more about your professional journey and how it could contribute to our team.

Please let us know your availability for a virtual or in-person interview. We look forward to the possibility of connecting with you soon.

Best regards,
[Recipient's Full Name]
[Recipient's Position]
[Company Name]
[Contact Information]`;

// Add a click event listener to the button
hireMeButton.addEventListener('click', () => {
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
});
// Hire Me Button functionality ends here



// LinkedIn Button functionality starts here
function openLinkedInProfile() {
    // Replace the URL below with the desired LinkedIn profile URL
    const linkedInUrl = 'https://www.linkedin.com/in/juveria-dalvi/';
    window.open(linkedInUrl, '_blank'); // Opens in a new tab
}
// LinkedIn Button functionality ends here
