export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">CloudCare</p>
        <h1 className="mt-2 text-3xl font-bold">Sign in</h1>
        <p className="mt-2 text-sm text-slate-600">Secure access for patients, doctors, and administrators.</p>

        <form className="mt-6 space-y-4">
          <label className="block text-sm font-medium">
            Email
            <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" type="email" defaultValue="patient@cloudcare.local" />
          </label>
          <label className="block text-sm font-medium">
            Password
            <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" type="password" defaultValue="password123" />
          </label>
          <button className="w-full rounded-lg bg-emerald-700 px-4 py-2 font-semibold text-white" type="button">
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
