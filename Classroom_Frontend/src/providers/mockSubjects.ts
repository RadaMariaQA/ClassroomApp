import { Subject } from "@/types/index";

export const mockSubjects: Subject[] = [
    {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description: "Fundamentals of programming, algorithms, and computational thinking for first-year students.",
    createdAt: "2026-06-15T00:00:00.000Z",
    },
    {
        id: 2,
        code: "MATH240",
        name: "Linear Algebra and Applications",
        department: "Mathematics",
        description: "Matrix theory, vector spaces, and linear transformations with applications in engineering and data science.",
        createdAt: "2026-06-15T00:00:00.000Z",
    },
    {
        id: 3,
        code: "ENGR210",
        name: "Engineering Mechanics",
        department: "Engineering",
        description: "Statics and dynamics principles used to analyze forces, structures, and mechanical systems.",
        createdAt: "2026-06-15T00:00:00.000Z",
    },
];
