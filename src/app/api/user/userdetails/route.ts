import { getDataFromToken } from "@/helpers/getDataFromToken";

import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connectDB } from "@/dbConfig/dbConfig";

connectDB();

export async function GET(request:NextRequest){

    try {
        const userId = await getDataFromToken(request);
        const user = await User.findOne({_id: userId}).select("username password");
        console.log(user)
        return NextResponse.json({
            message: "User found successfully !!!",
            data: user
        })
    } catch (error:any) {
        return NextResponse.json({error: error.message, status: 400});
    }

}