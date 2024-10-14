import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { connectDB } from "@/dbConfig/dbConfig";
import jwt from 'jsonwebtoken';

connectDB();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { email, password } = reqBody;
        console.log(reqBody);

        const user = await User.findOne({ email })
        if (!user) {
            return NextResponse.json({ error: "No user with this email was found !!!" }, { status: 400 })
        }
        
        // password validation
        const validPassword = await bcryptjs.compare(password, user.password);
        if (!validPassword) {
            return NextResponse.json({ error: "invalid password !!!" }, { status: 400 })
        }

        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email,
        }

        // create token
        const token = await jwt.sign(tokenData, process.env.JWT_SECRET_TOKEN!, {expiresIn: '1d'})

        const response =  NextResponse.json({
            message: "Logged in successfully !!!",
            success: true
        })

        response.cookies.set("token", token, {
            httpOnly: true
        })

        return response

    } catch (error: any) {
        return NextResponse.json({ error: error.message }),
            { status: 500 }
    }
}