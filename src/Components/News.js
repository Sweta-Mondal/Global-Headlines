import React, {useState, useEffect} from 'react';
import NewsItems from './NewsItems';
import defaultImage from './defaultImage.jpg';
import loading from './Loading.jpg';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const [articles , setArticles] = useState([]);
  const [loading , setLoading] = useState(false);
  const [page , setPage] = useState(1);
  const [totalResults , setTotalResults] = useState(0);

  useEffect(() => {
    console.log(apiKey);
    const fetchArticles = async () => {
      let url= `https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=${apiKey}&pageSize=${props.page}`;
      let data= await fetch(url);
      let parsedData= await data.json();
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
    };

    fetchArticles();
    document.title=`News-Support- ${props.category}`;
  }, [props.country, props.category, props.page]);

  const fetchMoreData= async () => {
      let url= `https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=apiKey=${apiKey}=${page+1}&pageSize=${props.page}`;
      let data= await fetch(url);
      let parsedData= await data.json();
      setPage(page+1);
      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
      setLoading(false);
  };

  return (
    <>
      <div className="Container my-3">
        <h2>News Support-Top {props.category} headlines</h2>
          <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<img className="loading" src={loading} alt='loading image'/>}
          >
          <div className="row">
          {articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                <NewsItems 
                  title={element.title} 
                  description={element.description} 
                  imageUrl={element.urlToImage?  element.urlToImage: defaultImage} 
                  newsUrl={element.url}
                />
            </div>
          })}
          </div>
          </InfiniteScroll>  
      </div>
    </>
  );
}

export default News;
