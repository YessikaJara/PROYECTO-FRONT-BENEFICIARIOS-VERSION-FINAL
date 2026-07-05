// app/api/beneficiarios/[id]/route.js
import { NextResponse } from 'next/server';
import BeneficiarioModel from '../../../../models/beneficiarioModel';

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const { sexo, edad, victima_conflicto, discapacidad } = await request.json();
    await BeneficiarioModel.update(id, sexo, edad, victima_conflicto, discapacidad);
    return NextResponse.json({ message: 'Beneficiario actualizado con éxito' });
  } catch (error) {
    return NextResponse.json({ error: 'Error al actualizar' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    await BeneficiarioModel.delete(id);
    return NextResponse.json({ message: 'Beneficiario eliminado con éxito' });
  } catch (error) {
    return NextResponse.json({ error: 'Error al eliminar' }, { status: 500 });
  }
}