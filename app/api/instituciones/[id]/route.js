// app/api/instituciones/[id]/route.js
import { NextResponse } from 'next/server';
import InstitucionModel from '../../../../models/institucionModel';

export async function PUT(request, { params }) {
  try {
    const { id } = await params; 
    const { nombre_ies } = await request.json();
    await InstitucionModel.update(id, nombre_ies);
    return NextResponse.json({ message: 'Institución actualizada con éxito' });
  } catch (error) {
    return NextResponse.json({ error: 'Error al actualizar' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    await InstitucionModel.delete(id);
    return NextResponse.json({ message: 'Institución eliminada con éxito' });
  } catch (error) {
    return NextResponse.json({ error: 'Error al eliminar' }, { status: 500 });
  }
}