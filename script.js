:root {
  --bg: #f9f9fb;
  --text: #333;
  --primary: #4e54c8;
  --secondary: #8f94fb;
  --card-bg: #fff;
}

body.dark {
  --bg: #1c1c28;
  --text: #eee;
  --primary: #ffb347;
  --secondary: #ffcc70;
  --card-bg: #2a2a3d;
}

/* General */
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: var(--bg);
  color: var(--text);
  transition: background 0.3s, color 0.3s;
}

/* Header */
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
}

.logo {
  font-weight: 700;
  color: var(--primary);
}

#theme-toggle {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--primary);
  cursor: pointer;
}

/* Hero */
.hero {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  text-align: center;
  padding: 100px 20px;
}

.hero-buttons .btn {
  margin: 10px;
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  background: white;
  color: var(--primary);
}

.btn.secondary {
  border: 2px solid white;
  background: transparent;
  color: white;
}

/* Sections */
section {
  padding: 60px 20px;
  max-width: 1000px;
  margin: auto;
}

h2 {
  text-align: center;
  margin-bottom: 30px;
  color: var(--primary);
}

/* Stats */
.stats {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.stats div {
  text-align: center;
}

/* Timeline */
.timeline-container {
  border-left: 3px solid var(--primary);
  padding-left: 20px;
}

.timeline-item {
  margin-bottom: 30px;
}

/* Projects */
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.project-card {
  background: var(--card-bg);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-card i {
  font-size: 2rem;
  margin-bottom: 10px;
  color: var(--primary);
}

/* Skills */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.skill-card {
  background: var(--card-bg);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.skill-card i {
  font-size: 2rem;
  margin-bottom: 10px;
  color: var(--secondary);
}

/* Certifications */
.certifications ul {
  list-style: none;
  padding: 0;
}

.certifications li {
  margin: 10px 0;
  font-size: 1.1rem;
}

/* Testimonials */
.testimonial-slider {
  display: flex;
  overflow: hidden;
  gap: 30px;
}

.testimonial {
  min-width: 100%;
  background: var(--card-bg);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

/* Contact */
.contact {
  text-align: center;
}

.contact i {
  color: var(--primary);
  margin-right: 8px;
}

.download-buttons {
  margin-top: 20px;
}

.download-buttons .btn {
  margin: 10px;
  display: inline-block;
  padding: 10px 20px;
  border-radius: 6px;
  background: var(--primary);
  color: white;
  text-decoration: none;
}

footer {
  text-align: center;
  padding: 20px;
  background: var(--primary);
  color: white;
  margin-top: 40px;
}

/* Responsive */
@media (max-width: 768px) {
  .stats {
    flex-direction: column;
  }
  .testimonial-slider {
    flex-direction: column;
  }
}
