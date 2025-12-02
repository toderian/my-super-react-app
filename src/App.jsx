import { useState, useEffect } from 'react'

// Environment variables (baked at build time)
const GREETING = import.meta.env.VITE_GREETING || 'Hello from Worker App Runner!'

// Framer image URL
const FRAMER_IMAGE = {
  url: 'https://framerusercontent.com/images/BBrzgxVqhEQ79nEKs4nBY54c8Q.svg',
  alt: 'Framer Design Asset',
  fallback: false
}

function App() {
  const [imageError, setImageError] = useState(false)
  const [serverIp, setServerIp] = useState('Loading...')

  useEffect(() => {
    fetch('/api/ip')
      .then(res => res.json())
      .then(data => setServerIp(data.ip))
      .catch(() => setServerIp('Failed to fetch'))
  }, [])

  const handleImageError = () => {
    setImageError(true)
  }

  const appStyles = {
    fontFamily: 'system-ui, -apple-system, sans-serif',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '3rem 2rem',
    lineHeight: '1.7',
    color: '#1e293b',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  }

  const containerStyles = {
    backgroundColor: 'white',
    borderRadius: '24px',
    padding: '3rem',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
  }

  const headerStyles = {
    textAlign: 'center',
    marginBottom: '3rem',
    paddingBottom: '2rem',
    borderBottom: '2px solid #e2e8f0'
  }

  const titleStyles = {
    fontSize: '3.5rem',
    fontWeight: '800',
    marginBottom: '1rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    letterSpacing: '-0.02em'
  }

  const greetingStyles = {
    fontSize: '2.25rem',
    fontWeight: '700',
    color: '#1e293b',
    textAlign: 'center',
    marginBottom: '3rem',
    padding: '2.5rem',
    background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
    borderRadius: '16px',
    border: '3px solid #0ea5e9',
    boxShadow: '0 4px 20px rgba(14, 165, 233, 0.15)'
  }

  const subtitleStyles = {
    fontSize: '1.25rem',
    color: '#64748b',
    marginBottom: '0',
    fontWeight: '500'
  }

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem'
  }

  const cardStyles = {
    padding: '2rem',
    backgroundColor: '#f8fafc',
    borderRadius: '16px',
    border: '1px solid #e2e8f0',
    transition: 'all 0.3s ease',
    cursor: 'default',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
  }

  const imagesSectionStyles = {
    marginBottom: '2rem',
    padding: '2.5rem',
    background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
    borderRadius: '16px',
    border: '2px solid #fbbf24',
    boxShadow: '0 4px 20px rgba(251, 191, 36, 0.15)'
  }

  const imageContainerStyles = {
    display: 'flex',
    gap: '1.5rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '1.5rem'
  }

  const imageStyles = {
    width: '240px',
    height: '240px',
    objectFit: 'contain',
    border: '2px solid #fbbf24',
    borderRadius: '12px',
    padding: '20px',
    backgroundColor: 'white',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
  }

  const sectionTitleStyles = {
    fontSize: '1.75rem',
    fontWeight: '700',
    color: '#1e293b',
    marginTop: 0,
    marginBottom: '1rem'
  }

  const textStyles = {
    color: '#475569',
    fontSize: '1.05rem',
    lineHeight: '1.8',
    marginBottom: '1rem'
  }

  return (
    <div style={appStyles}>
      <div style={containerStyles}>
        <header style={headerStyles}>
          <h1 style={titleStyles}>Ratio1 Worker App Runner Demo</h1>
          <p style={subtitleStyles}>
            Push changes to your watched branch → auto-refresh → updated UI
          </p>
        </header>

        <div style={greetingStyles}>
          {GREETING}
        </div>

        <div style={{
          textAlign: 'center',
          marginBottom: '3rem',
          padding: '1.5rem 2rem',
          background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
          borderRadius: '12px',
          border: '2px solid #10b981',
          boxShadow: '0 4px 15px rgba(16, 185, 129, 0.15)'
        }}>
          <span style={{ fontSize: '1.1rem', color: '#065f46', fontWeight: '600' }}>
            Server IP: <code style={{
              backgroundColor: '#064e3b',
              color: '#a7f3d0',
              padding: '0.25rem 0.75rem',
              borderRadius: '6px',
              fontFamily: 'monospace',
              fontSize: '1.15rem'
            }}>{serverIp}</code>
          </span>
        </div>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={sectionTitleStyles}>About This Application</h2>
          <p style={textStyles}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p style={textStyles}>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
          </p>
        </section>

        <div style={gridStyles}>
          <div style={cardStyles}>
            <h3 style={{ ...sectionTitleStyles, fontSize: '1.5rem', color: '#667eea' }}>Features</h3>
            <p style={textStyles}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. 
              Cras porttitor, enim sed gravida malesuada, libero nunc varius dolor, ac vehicula ipsum nulla vel massa.
            </p>
          </div>

          <div style={cardStyles}>
            <h3 style={{ ...sectionTitleStyles, fontSize: '1.5rem', color: '#764ba2' }}>Performance</h3>
            <p style={textStyles}>
              Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, 
              nascetur ridiculus mus. Donec id elit non mi porta gravida at eget metus.
            </p>
          </div>

          <div style={cardStyles}>
            <h3 style={{ ...sectionTitleStyles, fontSize: '1.5rem', color: '#0ea5e9' }}>Scalability</h3>
            <p style={textStyles}>
              Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed consectetur. 
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Integer posuere erat a ante venenatis dapibus.
            </p>
          </div>
        </div>

        <section style={imagesSectionStyles}>
          <h2 style={{ ...sectionTitleStyles, color: '#92400e' }}>Image Design Asset</h2>
          <p style={{ color: '#78350f', marginBottom: '1rem', fontSize: '1.05rem' }}>
            Image loaded from server (with graceful fallback on load errors):
          </p>
          <div style={imageContainerStyles}>
            {!imageError && (
              <img
                src={FRAMER_IMAGE.url}
                alt={FRAMER_IMAGE.alt}
                style={imageStyles}
                onError={handleImageError}
                title={FRAMER_IMAGE.alt}
              />
            )}
          </div>
          {imageError && (
            <p style={{ color: '#dc2626', fontSize: '0.95rem', marginTop: '1rem', fontWeight: '600' }}>
              Image failed to load and was hidden
            </p>
          )}
        </section>

        <section style={{ marginTop: '3rem', padding: '2rem', backgroundColor: '#f1f5f9', borderRadius: '16px' }}>
          <h2 style={sectionTitleStyles}>Additional Information</h2>
          <p style={textStyles}>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. 
            Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
          </p>
          <p style={{ ...textStyles, marginBottom: 0 }}>
            Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, 
            ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, 
            sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis.
          </p>
        </section>
      </div>
    </div>
  )
}

export default App
