"use server"
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import {join} from "path"
import { writeFile } from "fs/promises";


const db = new PrismaClient();



export const loginAdmin = async (formData)=>{
    try {
        const {email,password} = Object.fromEntries(formData);
        const user = await db.user.findFirst({
            where:{
                email
            }
        });
        if(!user) throw new Error("Invalid Credentials");
        if(!password == user.password) throw new Error("Invalid Credentials");
        revalidatePath("/login")
        return user;
    } catch (error) {
        throw new Error(error);
    }
}


export const createBlogPost = async (formData)=>{
    try {
        const{ file,...data} = Object.fromEntries(formData);
        if(!file) throw new Error("Invalid file");
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const filePath = join(".","public",file.name);
        const url = filePath.split("\\").pop()
        await writeFile(filePath,buffer);
        const post = await db.blog.create({
            data:{
                ...data,imageUrl:url
            }
        })
        revalidatePath("/admin/blog");
        revalidatePath("/admin/dashboard")
        revalidatePath("/blog");
        return post;
    } catch (error) {
        throw new Error(error);
    }
}



export const deleteBlogPost = async (id)=>{
    try {
        const deletedPost = await db.blog.delete({
            where:{
                id
            }
        });
        revalidatePath("/admin/blog");
        revalidatePath("/admin/dashboard");
        revalidatePath("/blog");

        return deletedPost;
    } catch (error) {
        throw new Error(error);
    }
}

// TODO: setup swipper


export const updateBlogPost = async (id,formData)=>{
    try {
        const {file,...data }= Object.fromEntries(formData);
        if(file){
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const filePath = join(".","public",file.name);
        const url = filePath.split("\\").pop()
        await writeFile(filePath,buffer);
        data.imageUrl = url;
        }
        if(data.imageUrl == "undefined") delete data.imageUrl;
        const updatedPost = await db.blog.update({
            data,
            where:{
                id
            }
        });
        return updatedPost;
    } catch (error) {
        throw new Error(error);
    }
}


export const createReservation = async (formData)=>{
    try {
        const data = Object.fromEntries(formData);
        data.date = new Date(data.date);
        const reservation = await db.reservation.create({
            data
        });

        revalidatePath("/admin/dashboard")
        revalidatePath("/admin/reservations");
        return reservation;
    } catch (error) {
        throw new Error(error)
    }
}


export const deleteReservation = async (id)=>{
    try {
        const reservation = await db.reservation.delete({
            where:{
                id
            }
        });
        revalidatePath("/admin/dashboard")
        revalidatePath("/admin/reservations");
        return reservation;
    } catch (error) {
        throw new Error(error);
    }
}


export const createComplaint = async (formData) =>{
    try {
        const data = Object.fromEntries(formData);
        const complaint = await db.compliant.create({
            data
        });
        revalidatePath("/admin/complaint");
        return complaint;
    } catch (error) {
        throw new Error(error);
    }
}



export const createService = async (formData)=>{
    try {
        const{ file,...data} = Object.fromEntries(formData);
        if(!file) throw new Error("Invalid file");
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const filePath = join(".","public",file.name);
        const url = filePath.split("\\").pop()
        await writeFile(filePath,buffer);
        const service = await db.service.create({
            data:{
                ...data,imageUrl:url
            }
        });
        revalidatePath("/admin/frontend/services");
        revalidatePath("/services");
        return service;
    } catch (error) {
        throw new Error(error)
    }
}

export const createSubService = async (formData)=>{
    try {
        const{ file,serviceId,...data} = Object.fromEntries(formData);
        if(!file) throw new Error("Invalid file");
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const filePath = join(".","public",file.name);
        const url = filePath.split("\\").pop()
        await writeFile(filePath,buffer);

        const service = await db.subService.create({
            data:{
                ...data,imageUrl:url,serviceId:+serviceId
            }
        });
        revalidatePath("/admin/frontend/services");
        revalidatePath("/services")
        return service;
    } catch (error) {
        throw new Error(error);
    }
}


export const deleteService = async (serviceId)=>{
    try {
        const service = await db.service.delete({
            where:{
                id:serviceId
            }
        });
        revalidatePath("/admin/frontend/services");
        revalidatePath("/services")
        return service;
    } catch (error) {
        throw new Error(error);
    }
}
export const deleteSubService = async (subServiceId)=>{
    try {
        const service = await db.subService.delete({
            where:{
                id:subServiceId
            }
        });
        revalidatePath("/admin/frontend/services");
        revalidatePath("/services")
        return service;
    } catch (error) {
        throw new Error(error);
    }
}


export const updateService = async (serviceId,formData)=>{
    try {
        const {file,...data }= Object.fromEntries(formData);
        if(file){
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const filePath = join(".","public",file.name);
        const url = filePath.split("\\").pop()
        await writeFile(filePath,buffer);
        data.imageUrl = url;
        }
        if(data.imageUrl == "undefined") delete data.imageUrl;
        const updatedPost = await db.service.update({
            data,
            where:{
                id:serviceId
            }
        });
        revalidatePath("/admin/frontend/services");
        revalidatePath("/services")
        return updatedPost;
    } catch (error) {
        throw new Error(error)
    }
}

export const updateHero = async (formData)=>{
    try {
        const {content,title,...rest} = Object.fromEntries(formData);
        const tempImagesUrlBuffer = [];
        if(rest){
            const restKeys = Object.keys(rest);
            for (let index = 0; index < restKeys.length; index++) {
                const bytes = await rest[index].arrayBuffer();
                const buffer = Buffer.from(bytes);
                const filePath = join(".","public",rest[index].name);
                const url = filePath.split("\\").pop()
                await writeFile(filePath,buffer);
                tempImagesUrlBuffer.push(url.toString())
            }
        }
        const hero = await db.hero.update({
            data:{
                content,title,imageUrl:JSON.stringify(tempImagesUrlBuffer)
            },
            where:{
                id:1
            }
        });
        revalidatePath("/admin/frontend/frontpage/hero");
        revalidatePath("/");
        return hero;
    } catch (error) {
        throw new Error(error);
    }
}


export const createClient = async (formData)=>{
    try {
        const{ logo,...data} = Object.fromEntries(formData);
        if(!logo) throw new Error("Invalid file");
        const bytes = await logo.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const filePath = join(".","public",logo.name);
        const url = filePath.split("\\").pop()
        data.logo = url;
        await writeFile(filePath,buffer);
        const client = await db.client.create({
            data
        });
        revalidatePath("/admin/frontend/frontpage/client");
        revalidatePath("/")
        return client;
    } catch (error) {
        throw new Error(error);
    }
}

export const deleteClient = async (id)=>{
    try {
        const client = await db.client.delete({
            where:{
                id
            }
        });
        revalidatePath("/admin/frontend/frontpage/client");
        revalidatePath("/")
        return client;
    } catch (error) {
        throw new Error(error);
    }
}

export const createReview = async (formData)=>{
    try {
        const {rating,...data} = Object.fromEntries(formData);
        const review = await db.review.create({
            data:{
                ...data, rating: +rating
            }
        });
        revalidatePath("/");
        revalidatePath("/admin/frontend/frontpage/testimonials")
        return review;
    } catch (error) {
        throw new Error(error);
    }
}

export const deleteReview = async (id)=>{
    try {
        const review = await db.review.delete({
            where:{
                id
            }
        });
        revalidatePath("/");
        revalidatePath("/admin/frontend/frontpage/testimonials")
        return review;
    } catch (error) {
        throw new Error(error);
    }
}

export const updateReviewVisibility = async (review)=>{
    try {
        const res = await db.review.update({
            where:{
                id:review.id
            },
            data:{
                isPublic : !review.isPublic
            }
        });

        revalidatePath("/");
        revalidatePath("/admin/frontend/frontpage/testimonials")

        return res;
    } catch (error) {
        throw new Error(error);
    }
}