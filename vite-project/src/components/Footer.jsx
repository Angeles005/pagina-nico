import './Footer.css';

export function Footer() {
  const googleMapsLink = 'https://maps.app.goo.gl/mbx5jta6vpgoNATa9';

  return (
    <footer className='footer'>
      <h4>WhatsApp － <span>1154830481</span></h4>
      <h4>Dirección － <a href={googleMapsLink} target="_blank" rel="noopener noreferrer"><span>Click aquí</span></a></h4>
    </footer>
  );
}
