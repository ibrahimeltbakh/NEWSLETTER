import { v4 as uuidv4 } from "uuid";
import Card1 from "./../cards/Card1/Card1";
import Card4 from "../cards/card4(without img)/Card4";
const Latest = ({ news }) => {
  return (
    <>
   <div style={{ textAlign:"center",color:"#04594D", width:"100%",marginBottom:"20px"}}>
    <h2>Latest News</h2>
    </div>
    
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {
        news.map((item,index) => {
          if (index%2 ==0 && item.urlToImage!=null){
            return (
                <div   key={uuidv4()} style={{
                    width:"48%"
                }}>
                    <Card1
                
                  imgSrc={item.urlToImage}
                  title={item.title}
                  author={item.author}
                  date={item.publishedAt}
                />
                </div>

                
              );
          }
          else{
           return(
            <div   key={uuidv4()} style={{
                width:"48%",
                padding:"10px",
                backgroundColor:"#fff",
                
            }}>
                <Card4
                  title={item.title}
                  author={item.author}
                  date={item.publishedAt}
                  description= {item.description || "No Description"}
                />
            </div>
             
              );
          }
         
           
        }) 
      }
    </div>
    </>
    
  );
};

export default Latest;
