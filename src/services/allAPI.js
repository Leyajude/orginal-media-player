import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./server_url"
 export const uploadVideoAPI=async(video)=>{
    return await commonAPI("POST",`${SERVER_URL}/videos`,video)
 }

 //get video api called by view component
 export const getAllVideosAPI=async()=>{
   return await commonAPI("GET",`${SERVER_URL}/videos`,"")

 }
 //store watch history to videocard
 export const saveHistoryAPI=async (videoDetails)=>{
  return await commonAPI("POST",`${SERVER_URL}/history`,videoDetails)
 }
 export const getHistoryAPI=async()=>{
  return await commonAPI("GET",`${SERVER_URL}/history`,"")
 }
 //remove history to watch component
 export const removeHistoryAPI=async (videoID)=>{
  return await commonAPI("DELETE",`${SERVER_URL}/history/${videoID}`,{})
 }
 //remove video by viddocard
 export const removeVideoAPI= async (videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/videos/${videoId}`,{})
 }
 //save categories to category component
 export const addCategoryAPI=async (categoryDetails)=>{
  return await commonAPI("POST",`${SERVER_URL}/categories`,categoryDetails)

 }
  //get categories to category component
  export const getCategoryAPI=async ()=>{
   return await commonAPI("GET",`${SERVER_URL}/categories`,"")
 
  }
   //remove category api
 export const removeCategoryAPII= async (categoryId)=>{
   return await commonAPI("DELETE",`${SERVER_URL}/categories/${categoryId}`,{})
}

//get single vide api
export const getAVideoAPI =async(videoId)=>{
return await commonAPI("GET",`${SERVER_URL}/videos/${videoId}`,"")
}
//update category api
export const updateCategoryAPI =async(categoryId,updatedCategoryDetails)=>{
   return await commonAPI("PUT",`${SERVER_URL}/categories/${categoryId}`,updatedCategoryDetails)
   }
   //getSinglecategory api
export const getSingleCategoryAPI =async(categoryId)=>{
   return await commonAPI("GET",`${SERVER_URL}/categories/${categoryId}`,"")
   }