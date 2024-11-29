import { NextResponse } from 'next/server';

interface RequestBody {
    name: string;
    email: string;
    phone: string;
}

export async function POST(request: Request) {
    try {
        //console.log("Received form submission request.");
        const body: RequestBody = await request.json();

        const response = await fetch("https://clubedoshoteis-apim.azure-api.net/v1/people", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Ocp-Apim-Subscription-Key": "35c69284766943b495c7cf4e5a6729fe"
            },
            body: JSON.stringify(body),
        });
        console.log(response.status, response.statusText);

        if (!response.ok) {
            throw new Error("Failed to submit form.");
        }

        const data = await response.json();
        return NextResponse.json({ message: "Form submitted successfully!", data });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}