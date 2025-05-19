import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const tasks = await prisma.task.findMany();
  return NextResponse.json(tasks);
}

export async function POST(req) {
  const data = await req.json();
  const newTask = await prisma.task.create({
    data: {
      title: data.title,
      completed: false,
    },
  });
  return NextResponse.json(newTask);
}
