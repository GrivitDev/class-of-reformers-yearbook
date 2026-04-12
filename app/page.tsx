import StudentForm from "@/components/StudentForm";

export default function Home() {
  return (
    <main>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">⛪ COLLEGE ON THE ROCK</div>
        <div className="nav-right">SET OF &apos;026</div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">

        <div className="glow"></div>

        <h1>Final Year Student&apos;s Yearbook Portal</h1>

        <p className="sub">
          2025 / 2026 Graduating Class
        </p>

        <div className="badge">
          Class of Reformers • 2022 – 2026
        </div>

        <p className="sub">
          Please Fill the fields Bellow Appropraitely. You can only submit once.
        </p>

      </section>

      {/* FORM WRAPPER */}
      <section className="form-wrapper">
        <StudentForm />
      </section>

    </main>
  );
}