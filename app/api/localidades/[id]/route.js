// app/api/localidades/[id]/route.js
import { NextResponse } from 'next/server';
import LocalidadModel from '../../../../models/localidadModel';

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const { nombre_localidad } = await request.json();
    await LocalidadModel.update(id, nombre_localidad);
    return NextResponse.json({ message: 'Localidad actualizada con éxito' });
  } catch (error) {
    return NextResponse.json({ error: 'Error al actualizar' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    await LocalidadModel.delete(id);
    return NextResponse.json({ message: 'Localidad eliminada con éxito' });
  } catch (error) {
    return NextResponse.json({ error: 'Error al eliminar' }, { status: 500 });
  }
}