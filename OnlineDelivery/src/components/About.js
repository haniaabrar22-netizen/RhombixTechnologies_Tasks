const About = () => (
  <section className="about">
    <h2>About QuickEats</h2>
    <p className="muted">QuickEats is a demo food delivery UI built with React and simple client-side state. This small project demonstrates a clean, responsive design and basic ordering flow.</p>

    <div className="about-grid" style={{display:'grid', gridTemplateColumns:'1fr 320px', gap:20, marginTop:20}}>
      <div>
        <h3>Our mission</h3>
        <p>Deliver fresh, delicious meals from local kitchens to your door with speed and care. We focus on simplicity — fast browsing, easy ordering, and reliable delivery tracking (demo only).</p>

        <h3 style={{marginTop:18}}>How it works</h3>
        <ol className="muted">
          <li>Browse the menu and pick your items.</li>
          <li>Review your cart and adjust quantities.</li>
          <li>Checkout and wait for your order to arrive.</li>
        </ol>

        <h3 style={{marginTop:18}}>Built for learning</h3>
        <p className="muted">This app is a starting point — you can wire in a backend, add authentication, or swap the client-side routing for a router library.</p>
      </div>

      <aside style={{background:'#fff', padding:16, borderRadius:10, boxShadow:'0 6px 18px rgba(20,30,80,0.04)'}}>
        <h3>Quick Stats</h3>
        <div style={{display:'grid', gap:8}}>
          <div><strong>Local restaurants:</strong> 12</div>
          <div><strong>Average delivery time:</strong> 28–40 mins</div>
          <div><strong>Orders today:</strong> 34</div>
        </div>

        <div style={{marginTop:16}}>
          <h4>Meet the team</h4>
          <div className="muted">A tiny group of designers and engineers building delightful demo experiences.</div>
        </div>

        <div style={{textAlign:'center', marginTop:14}}>
          <a className="btn small" href="#/contact">Get in touch</a>
        </div>
      </aside>
    </div>
  </section>
);
