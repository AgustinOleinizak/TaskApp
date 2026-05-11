import { NextResponse } from 'next/server';
import User from '@/models/User'; // Importa tu modelo
import { compare } from 'bcryptjs';

export async function POST(request) {
  const { email, password } = await request.json();
  // Validar usuario, comparar contraseña y crear token JWT
  // ...
  return NextResponse.json({ message: "Login exitoso" });
}
