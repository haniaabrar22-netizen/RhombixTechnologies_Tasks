const { useState, useEffect } = React;

// Sample menu data
const MENU = [
  { id: 1, name: 'Margherita Pizza', desc: 'Tomato, mozzarella, basil', price: 9.99, img: 'assets/MP.jpg' },
  { id: 2, name: 'Spicy Ramen', desc: 'Rich broth, noodles, egg', price: 12.5, img: 'assets/ramen.jpg' },
  { id: 3, name: 'Caesar Salad', desc: 'Crisp romaine, parmesan, croutons', price: 8.25, img: 'assets/salad.jpg' },
  { id: 4, name: 'Cheeseburger', desc: 'Beef patty, cheddar, pickles', price: 10.75, img: 'assets/burgers.jpg' }
];

function Header({ current, setCurrent, cartCount }) {
  return (
    <header className="site-header">
      <div className="brand" onClick={() => (location.hash = '#/')}>QuickEats</div>
      <nav>
        <a href="#/" className={current === '/' ? 'active' : ''}>Home</a>
        <a href="#/menu" className={current === 'menu' ? 'active' : ''}>Menu</a>
        <a href="#/about" className={current === 'about' ? 'active' : ''}>About</a>
        <a href="#/contact" className={current === 'contact' ? 'active' : ''}>Contact</a>
        <a href="#/cart" className={current === 'cart' ? 'active cart-link' : 'cart-link'}>
          Cart <span className="cart-badge">{cartCount}</span>
        </a>
      </nav>
    </header>
  );
}

function Menu({ onAdd }) {
  return (
    <section className="menu">
      <h2>Menu</h2>
      <div className="cards">
        {MENU.map(item => (
          <div className="card" key={item.id}>
            <img src={item.img} alt={item.name} />
            <div className="card-body">
              <h3>{item.name}</h3>
              <p className="muted">{item.desc}</p>
              <div className="row">
                <div className="price">${item.price.toFixed(2)}</div>
                <button className="btn small" onClick={() => onAdd(item)}>Add</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Cart({ items, onRemove, onChangeQty }) {
  const total = items.reduce((s, it) => s + it.price * it.qty, 0);
  return (
    <section className="cart">
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p className="muted">Your cart is empty. Go to the <a href="#/menu">menu</a> to add items.</p>
      ) : (
        <>
          <div className="cart-list">
            {items.map(it => (
              <div className="cart-row" key={it.id}>
                <div className="cart-info">
                  <strong>{it.name}</strong>
                  <div className="muted">${it.price.toFixed(2)}</div>
                </div>
                <div className="cart-actions">
                  <input type="number" min="1" value={it.qty} onChange={e => onChangeQty(it.id, parseInt(e.target.value || '1'))} />
                  <button className="btn ghost" onClick={() => onRemove(it.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <div>Total</div>
            <div className="big">${total.toFixed(2)}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <button className="btn primary">Checkout</button>
          </div>
        </>
      )}
    </section>
  );
}

function App() {
  const [route, setRoute] = useState(() => location.hash.replace('#/', '') || '/');
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem('qe_cart');
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    function onHash() {
      setRoute(location.hash.replace('#/', '') || '/');
    }
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    localStorage.setItem('qe_cart', JSON.stringify(cart));
  }, [cart]);

  function addToCart(item) {
    setCart(prev => {
      const found = prev.find(p => p.id === item.id);
      if (found) return prev.map(p => p.id === item.id ? { ...p, qty: p.qty + 1 } : p);
      return [...prev, { ...item, qty: 1 }];
    });
    location.hash = '#/cart';
  }

  function removeFromCart(id) {
    setCart(prev => prev.filter(p => p.id !== id));
  }

  function changeQty(id, qty) {
    if (!qty || qty < 1) qty = 1;
    setCart(prev => prev.map(p => p.id === id ? { ...p, qty } : p));
  }

  const cartCount = cart.reduce((s, it) => s + it.qty, 0);

  return (
    <div className="app">
      <Header current={route === '/' ? '/' : route} cartCount={cartCount} />
      <main className="container">
        {route === '/' && <Home />}
        {route === 'menu' && <Menu onAdd={addToCart} />}
        {route === 'cart' && <Cart items={cart} onRemove={removeFromCart} onChangeQty={changeQty} />}
        {route === 'contact' && <Contact />}
        {route === 'about' && <About />}
      </main>
      <footer className="site-footer">© QuickEats — demo UI</footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
