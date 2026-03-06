const Contact = () => {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    if (!name || !email || !message) {
      alert('Please fill all fields');
      return;
    }
    alert('Thanks, ' + name + '! Your message has been received.');
    form.reset();
  }

  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <div className="muted">We'd love to hear from you — questions, feedback, or partnership inquiries.</div>

      <div style={{display:'flex', gap:20, marginTop:16, flexWrap:'wrap'}}>
        <div style={{flex:'1 1 280px', background:'#fff', padding:16, borderRadius:10, boxShadow:'0 6px 18px rgba(20,30,80,0.04)'}}>
          <h3>Contact Info</h3>
          <p><strong>Address</strong><br/>123 Demo Lane<br/>Food City, FC 12345</p>
          <p><strong>Phone</strong><br/><a href="tel:+1234567890">+1 (234) 567-890</a></p>
          <p><strong>Email</strong><br/><a href="mailto:hello@quickeats.example">hello@quickeats.example</a></p>
          <p><strong>Hours</strong><br/>Mon–Sun: 9:00 AM – 10:00 PM</p>
        </div>

        <form onSubmit={handleSubmit} style={{flex:'1 1 320px', background:'#fff', padding:16, borderRadius:10, boxShadow:'0 6px 18px rgba(20,30,80,0.04)'}}>
          <h3>Send a Message</h3>
          <div style={{display:'grid', gap:8}}>
            <input name="name" placeholder="Your name" style={{padding:8, borderRadius:8, border:'1px solid #e6e6ef'}} />
            <input name="email" placeholder="Your email" style={{padding:8, borderRadius:8, border:'1px solid #e6e6ef'}} />
            <textarea name="message" rows="4" placeholder="Message" style={{padding:8, borderRadius:8, border:'1px solid #e6e6ef'}} />
            <div style={{textAlign:'right'}}>
              <button className="btn" type="submit">Send</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
