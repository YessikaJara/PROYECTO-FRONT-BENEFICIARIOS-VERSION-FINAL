// app/api/localidades/route.js
import { NextResponse } from 'next/server';
import LocalidadModel from '../../../models/localidadModel';

export async function GET() {
  try {
    const localidades = await LocalidadModel.getAll();
    return NextResponse.json(localidades);
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener localidades' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { id_localidad, nombre_localidad } = await request.json();
    await LocalidadModel.create(id_localidad, nombre_localidad);
    return NextResponse.json({ message: 'Localidad creada con éxito' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error al crear localidad' }, { status: 500 });
  }
}