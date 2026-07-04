// app/api/instituciones/route.js
import { NextResponse } from 'next/server';
import InstitucionModel from '../../../models/institucionModel';

export async function GET() {
  try {
    const instituciones = await InstitucionModel.getAll();
    return NextResponse.json(instituciones);
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener instituciones' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { id_ies, nombre_ies } = await request.json();
    await InstitucionModel.create(id_ies, nombre_ies);
    return NextResponse.json({ message: 'Institución creada con éxito' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error al crear institución' }, { status: 500 });
  }
}