import { useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Check,
  FileText,
  Instagram,
  Laptop,
  Menu,
  MessageCircle,
  Palette,
  Play,
  Send,
  Share2,
  Smartphone,
  X,
} from 'lucide-react';

const brandLogo = '/cropped_circle_image_(2)_(3).png';

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [form, setForm] = useState({ name: '', business: '', phone: '', service: 'Custom Invoice', message: '' });
  const [formSent, setFormSent] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const sendWhatsApp = () => {
    const text = `Halo DIGINVOICE, saya ingin konsultasi.%0A%0A*Nama:* ${form.name}%0A*Nama Bisnis:* ${form.business}%0A*Nomor WhatsApp:* ${form.phone}%0A*Layanan:* ${form.service}%0A*Kebutuhan:* ${form.message}`;
    window.open(`https://wa.me/6285865702681?text=${text}`, '_blank');
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
  };

  const selectService = (service: string) => {
    setForm((prev) => ({ ...prev, service }));
    scrollTo('consult');
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#fbfaff] text-[#20152b]">
      <div className="announcement-bar">
        <span className="announcement-dot" />
        <span>Terima kasih sudah menggunakan DIGINVOICE</span>
        <span className="announcement-separator">•</span>
        <a href="https://www.instagram.com/diginvoice/" target="_blank" rel="noreferrer">@diginvoice</a>
      </div>

      <nav className="site-nav">
        <button className="brand-lockup" onClick={() => scrollTo('top')} aria-label="Kembali ke atas">
          <img src={brandLogo} alt="DIGINVOICE" className="brand-image" />
        </button>
        <div className="desktop-nav-links">
          <button onClick={() => scrollTo('features')}>Fitur</button>
          <button onClick={() => scrollTo('how-it-works')}>Cara Kerja</button>
          <button onClick={() => scrollTo('pricing')}>Layanan</button>
          <button onClick={() => scrollTo('consult')}>Konsultasi</button>
        </div>
        <div className="nav-actions">
          <button className="button button-dark button-small" onClick={() => scrollTo('consult')}>Konsultasi <ArrowRight size={15} /></button>
        </div>
        <button className="mobile-menu-button" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Buka menu">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {mobileOpen && (
        <div className="mobile-menu">
          <button onClick={() => scrollTo('features')}>Fitur</button>
          <button onClick={() => scrollTo('how-it-works')}>Cara Kerja</button>
          <button onClick={() => scrollTo('pricing')}>Layanan</button>
          <button onClick={() => scrollTo('consult')}>Konsultasi</button>
          <button className="button button-dark" onClick={() => scrollTo('consult')}>Konsultasi <ArrowRight size={16} /></button>
        </div>
      )}

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <h1>Bikin invoice<br /><span>bisnismu lebih</span><br />profesional.</h1>
          <p className="hero-subtitle">Invoice digital dengan logo, warna, dan identitas bisnis kamu sendiri. Berbentuk PWA — bisa dibuka dari browser, HP, maupun laptop. Cocok untuk personal, freelancer, jasa, dan UMKM.</p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={() => scrollTo('consult')}>Konsultasi <ArrowRight size={17} /></button>
            <button className="button button-ghost" onClick={() => scrollTo('how-it-works')}><Play size={15} fill="currentColor" /> Lihat cara kerja</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
          <div className="floating-label label-top"><BadgeCheck size={16} /> Brand kamu, gaya kamu</div>
          <div className="hero-devices">
            <div className="phone-mockup">
              <div className="phone-notch" />
              <div className="phone-screen">
                <div className="phone-invoice-mini">
                  <div className="phone-invoice-top"><div className="invoice-mini-logo">S</div><div><strong>Studio Arunika Rie</strong><small>Creative design studio</small></div></div>
                  <div className="phone-invoice-no">#INV-0268</div>
                  <div className="phone-invoice-item"><span>Jasa desain identitas brand</span><strong>Rp2.500.000</strong></div>
                  <div className="phone-invoice-item"><span>Social media kit</span><strong>Rp800.000</strong></div>
                  <div className="phone-invoice-total"><span>Total</span><strong>Rp3.663.000</strong></div>
                  <div className="phone-invoice-status">UNPAID</div>
                </div>
              </div>
            </div>
            <div className="invoice-paper">
              <div className="invoice-topline"><span>INVOICE</span><span className="invoice-status">PAID</span></div>
              <div className="invoice-brand-row"><div className="invoice-mini-logo">S</div><div><strong>Studio Arunika Rie</strong><small>Creative design studio</small></div><div className="invoice-number">#INV-0268</div></div>
              <div className="invoice-client-row"><div><small>DITAGIHKAN KEPADA</small><strong>Rania Kurnia</strong><span>rania@email.com</span></div><div className="invoice-date"><small>TANGGAL</small><strong>25 AGU 2026</strong></div></div>
              <div className="invoice-line invoice-heading"><span>DESKRIPSI</span><span>TOTAL</span></div>
              <div className="invoice-line"><div><strong>Jasa desain identitas brand</strong><small>Logo, color palette &amp; brand guide</small></div><span>Rp2.500.000</span></div>
              <div className="invoice-line"><div><strong>Social media kit</strong><small>Template Instagram &amp; highlight</small></div><span>Rp800.000</span></div>
              <div className="invoice-summary"><div><span>Subtotal</span><span>Rp3.300.000</span></div><div><span>PPN (11%)</span><span>Rp363.000</span></div><div className="total"><strong>Total</strong><strong>Rp3.663.000</strong></div></div>
              <div className="invoice-footer"><div><small>PEMBAYARAN KE</small><strong>BCA • 123 456 7890</strong><span>a/n Studio Arunika Rie</span></div><div className="invoice-thanks">Terima kasih telah<br />mempercayai kami.</div></div>
            </div>
          </div>
          <div className="floating-label label-bottom"><Smartphone size={16} /> Bisa dari HP &amp; laptop</div>
        </div>
      </section>

      <section className="section features-section" id="features">
        <div className="section-heading"><div><div className="eyebrow">Semua yang kamu butuhkan</div><h2>Simple dipakai,<br /><em>serius hasilnya.</em></h2></div><p>DIGINVOICE dirancang untuk membuat urusan invoice terasa ringan, agar kamu bisa fokus mengembangkan bisnis.</p></div>
        <div className="feature-grid">
          <article className="feature-card feature-large"><div className="feature-icon lavender"><Palette size={20} /></div><h3>Identitas brand kamu</h3><p>Logo, warna, dan detail bisnis kamu langsung tampil rapi di setiap invoice.</p><div className="mini-brand-preview"><div className="mini-brand-logo">SR</div><div><strong>Studio Arunika Rie</strong><span>Creative design studio</span></div><div className="mini-color" /></div></article>
          <article className="feature-card"><div className="feature-icon peach"><Send size={20} /></div><h3>Kirim dalam sekali klik</h3><p>Bagikan via WhatsApp, link, PDF, atau gambar. Semudah itu.</p><div className="share-bubbles"><span><MessageCircle size={18} /></span><span><Share2 size={18} /></span><span><FileText size={18} /></span><ArrowRight size={18} /></div></article>
          <article className="feature-card"><div className="feature-icon mint"><Smartphone size={20} /></div><h3>Bisa dari HP &amp; laptop</h3><p>Buka dari browser atau install ke perangkat. Invoice tetap rapi di layar apa pun.</p><div className="device-icons"><Smartphone size={28} /><Laptop size={28} /></div></article>
        </div>
      </section>

      <section className="section workflow-section" id="how-it-works"><div className="workflow-copy"><div className="eyebrow">Cara kerja yang nggak ribet</div><h2>Dari bikin sampai dibayar,<br /><em>semua terasa mudah.</em></h2><p>Tak perlu belajar sistem rumit. Cukup isi, kirim, dan nikmati tampilan profesional yang bikin pelanggan makin percaya.</p><button className="button button-dark" onClick={() => scrollTo('consult')}>Konsultasi sekarang <ArrowRight size={16} /></button></div><div className="steps"><div className="step"><span>01</span><div><h3>Atur identitas bisnis</h3><p>Upload logo, pilih warna, dan isi detail usahamu sekali saja.</p></div></div><div className="step"><span>02</span><div><h3>Isi detail invoice</h3><p>Tambahkan customer, produk atau jasa, harga, dan catatan.</p></div></div><div className="step"><span>03</span><div><h3>Kirim &amp; terima pembayaran</h3><p>Bagikan invoice dan pantau statusnya sampai selesai.</p></div></div></div></section>

      <section className="testimonial-section"><div className="quote-mark">“</div><blockquote>Untuk melihat portofolio hasil invoice DIGINVOICE, silakan hubungi kami langsung via Instagram atau WhatsApp.</blockquote><div className="testimonial-cta"><a href="https://www.instagram.com/diginvoice/" target="_blank" rel="noreferrer" className="testimonial-link"><Instagram size={16} /> @diginvoice</a><a href="https://wa.me/6285865702681" target="_blank" rel="noreferrer" className="testimonial-link"><MessageCircle size={16} /> WhatsApp</a></div></section>

      <section className="section pricing-section" id="pricing"><div className="pricing-heading"><div className="eyebrow">Layanan custom DIGINVOICE</div><h2>Tidak mau bikin sendiri?<br /><em>Kami bantu buatkan.</em></h2><p>DIGINVOICE bukan cuma PWA invoice. Kami juga melayani pembuatan invoice custom sesuai kebutuhan bisnismu.</p></div><div className="pricing-grid"><article className="price-card"><span className="price-kicker">DIGITAL INVOICE</span><h3>Pakai PWA-nya</h3><p>Bikin invoice sendiri pakai DIGINVOICE yang simpel dan cepat.</p><ul><li><Check size={16} /> PWA invoice siap pakai</li><li><Check size={16} /> Share via WhatsApp &amp; link</li><li><Check size={16} /> Download PDF &amp; JPG</li></ul><button className="button button-outline" onClick={() => selectService('Digital Invoice')}>Konsultasi sekarang <ArrowRight size={16} /></button></article><article className="price-card featured-price"><span className="popular-badge">PALING DIMINTA</span><span className="price-kicker">CUSTOM INVOICE</span><h3>Dibuatkan untuk kamu</h3><p>Kami buatkan invoice dengan logo dan identitas brand kamu sendiri.</p><ul><li><Check size={16} /> Logo &amp; warna brand kamu</li><li><Check size={16} /> Template custom</li><li><Check size={16} /> Siap pakai, tinggal kirim</li></ul><button className="button button-primary" onClick={() => selectService('Custom Invoice')}>Konsultasi sekarang <ArrowRight size={16} /></button></article><article className="price-card"><span className="price-kicker">CUSTOM SYSTEM</span><h3>Sistem khusus bisnismu</h3><p>Sistem invoice yang dibuat khusus mengikuti alur bisnis kamu.</p><ul><li><Check size={16} /> Alur kerja yang disesuaikan</li><li><Check size={16} /> Dashboard personal</li><li><Check size={16} /> Pendampingan langsung</li></ul><button className="button button-outline" onClick={() => selectService('Custom System')}>Konsultasi sekarang <ArrowRight size={16} /></button></article></div></section>

      <section className="section consult-section" id="consult"><div className="consult-copy"><div className="eyebrow">Konsultasi gratis</div><h2>Ceritakan kebutuhan<br /><em>invoice bisnismu.</em></h2><p>Isi form di samping, nanti kami chat kamu via WhatsApp untuk bantu tentukan layanan yang paling pas. Tanpa biaya konsultasi.</p><div className="consult-points"><div className="consult-point"><Check size={18} /> Respon cepat via WhatsApp</div><div className="consult-point"><Check size={18} /> Tanpa biaya konsultasi</div><div className="consult-point"><Check size={18} /> Diskusi santai, nggak ngaret</div></div></div><div className="consult-form-card"><h3>Form Konsultasi</h3>{formSent ? <div className="form-success"><Check size={28} /><p>Terima kasih! Kamu akan diarahkan ke WhatsApp untuk melanjutkan percakapan dengan kami.</p></div> : <><label>Nama kamu<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Contoh: Rania Kurnia" /></label><label>Nama bisnis<input value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} placeholder="Contoh: Studio Arunika Rie" /></label><label>Nomor WhatsApp<input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Contoh: 0812xxxxxxx" /></label><label>Layanan yang diminati<select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}><option>Custom Invoice</option><option>Custom System</option><option>Digital Invoice</option><option>Belum tahu, mau tanya dulu</option></select></label><label>Ceritakan kebutuhan kamu<textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Contoh: Saya butuh invoice dengan logo dan warna brand saya sendiri untuk bisnis jasa desain." rows={4} /></label><button className="button button-primary consult-submit" onClick={sendWhatsApp}><MessageCircle size={16} /> Kirim via WhatsApp <ArrowRight size={16} /></button></>}</div></section>

      <section className="cta-section"><div className="eyebrow light-eyebrow">Saatnya tampil lebih profesional</div><h2>Invoice yang baik,<br />membuka lebih banyak peluang.</h2><p>Mulai bikin invoice yang bukan cuma rapi, tapi juga mencerminkan kualitas bisnismu.</p><button className="button button-light" onClick={() => scrollTo('consult')}>Konsultasi sekarang <ArrowRight size={16} /></button></section>

      <footer className="site-footer"><div className="footer-brand"><img src={brandLogo} alt="DIGINVOICE" className="footer-logo" /><p>Digital invoice custom untuk personal,<br />freelancer, dan UMKM.</p><div className="footer-social"><a href="https://www.instagram.com/diginvoice/" target="_blank" rel="noreferrer"><Instagram size={17} /></a><a href="https://wa.me/6285865702681" target="_blank" rel="noreferrer"><MessageCircle size={17} /></a></div></div><div className="footer-links"><div><strong>Produk</strong><button onClick={() => scrollTo('features')}>Fitur</button><button onClick={() => scrollTo('pricing')}>Layanan</button></div><div><strong>Bantuan</strong><button onClick={() => scrollTo('consult')}>Konsultasi</button><button onClick={() => window.open('https://wa.me/6285865702681', '_blank')}>Hubungi kami</button><button onClick={() => scrollTo('how-it-works')}>Cara kerja</button></div><div><strong>Ikuti kami</strong><a href="https://www.instagram.com/diginvoice/" target="_blank" rel="noreferrer">Instagram</a><a href="https://wa.me/6285865702681" target="_blank" rel="noreferrer">WhatsApp</a></div></div><div className="footer-bottom"><span>© 2026 DIGINVOICE.</span><span>Simple. Professional. Yours.</span></div></footer>

    </main>
  );
}

export default App;
