// Autenticação simples para o admin
// Em produção, use uma solução mais robusta como NextAuth ou Supabase Auth

const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "admin123", // Em produção, use hash e variáveis de ambiente
}

export function validateAdmin(username: string, password: string): boolean {
  return username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password
}

export function generateToken(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}
