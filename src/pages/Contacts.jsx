// function ContactPage() {
//     return (
//       <div className="contact-page">
//         <h1>Contact Us</h1>
//         <form id="contact-form">
//           <div className="form-group">
//             <label htmlFor="name">Navdha</label>
//             <input type="text" id="name" name="name" required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" name="email" required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="message">Message</label>
//             <textarea id="message" name="message" rows="5" required></textarea>
//           </div>
//           <button type="submit">Send Message</button>
//         </form>
//       </div>
//     );
//   }



// function ContactPage()  {
//   return (
//     <div style={{ textAlign: 'center',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '50vh' }}>
//       <h1>Contact Us</h1>
//       <p>Business Owner: Manoj Tiwari</p>
//       <p>Mobile: +971 50 854 3611</p>
//       <p>Landline: +971 04 665 2898</p>
//       <p>Whatsapp: +971 50 854 3611</p>
//       <p>Email: manoj.tiwari@navdhallc.com</p>
//       <p>Location: Office 403 Noor Talib Building, Opp. Ascot Hotel, Khalid Bin Waleed Street, Burdubai, Dubai, UAE</p>


//     </div>
//   );
// };
//   export default ContactPage;



function ContactPage() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1><b>Contact Us</b></h1>
        <p>Business Owner: Manoj Tiwari</p>
        <p>Mobile: +971 50 854 3611</p>
        <p>Landline: +971 04 665 2898</p>
        <p>Whatsapp: +971 50 854 3611</p>
        <p>Email: manoj.tiwari@navdhallc.com</p>
        <p>Location: Office 403 Noor Talib Building, Opp. Ascot Hotel, Khalid Bin Waleed Street, Burdubai, Dubai, UAE</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70vh',
  },
  content: {
    textAlign: 'center',
  },
};

export default ContactPage;
  