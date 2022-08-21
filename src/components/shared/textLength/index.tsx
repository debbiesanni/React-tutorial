export const allowTextLength = (text, allowedLength)=>{
   return text?.length > allowedLength ? text.substr(0, allowedLength) + '...' : text
}