const Home = () => (
  <>
    <section className="hero">
      <div>
        <h1>Fast. Fresh. Friendly.</h1>
        <p className="lead">Tasty meals from local kitchens, delivered to your door. Browse, order, and relax — we’ll handle the rest.</p>
        <div className="hero-ctas" style={{display:'flex', gap:12, marginTop:12}}>
          <a className="btn" href="#/menu">Browse Menu</a>
          <a className="btn ghost" href="#/about">Learn more</a>
        </div>

  <div className="hero-features" style={{display:'flex', gap:12, marginTop:28}}>
          <div className="feature">
            <strong>Quick Delivery</strong>
            <div className="muted">Average 30–40 mins</div>
          </div>
          <div className="feature">
            <strong>Fresh Food</strong>
            <div className="muted">Sourced locally</div>
          </div>
          <div className="feature">
            <strong>Secure Payment</strong>
            <div className="muted">Card or mobile pay</div>
          </div>
        </div>
      </div>
      <img src="assets/food.jpg" alt="food" />
    </section>

    <section className="features container" style={{marginTop:18}}>
      <div className="cards small">
        <div className="card small">
          <div className="card-body">
            <h3>Explore local favorites</h3>
            <p className="muted">Hand-picked dishes from nearby restaurants you’ll love.</p>
          </div>
        </div>
        <div className="card small">
          <div className="card-body">
            <h3>Easy ordering</h3>
            <p className="muted">Simple cart management and clear pricing.</p>
          </div>
        </div>
        <div className="card small">
          <div className="card-body">
            <h3>Order tracking</h3>
            <p className="muted">Know when your meal is on the way (demo).</p>
          </div>
        </div>
      </div>
    </section>
  </>
);
