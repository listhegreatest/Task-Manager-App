// app/api/tasks/[id]/route.js
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function DELETE(request) {
  const url = request.nextUrl.pathname;
  const idStr = url.split('/').pop();
  const id = parseInt(idStr);

  if (isNaN(id)) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  try {
    const deletedTask = await prisma.task.delete({
      where: { id },
    });

    return NextResponse.json(deletedTask);
  } catch (error) {
    return NextResponse.json(
      { error: 'Task not found or already deleted' },
      { status: 404 }
    );
  }
}

