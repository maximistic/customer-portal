import { useState } from 'react';
import news1 from '../Components/Assets/news1.jpg';
import news2 from '../Components/Assets/news2.jpg';
import news3 from '../Components/Assets/news3.jpg';
import news4 from '../Components/Assets/news1.jpg';

function LatestNews() {
  const [selectedNews, setSelectedNews] = useState(null);

  const newsItems = [
    { 
      src: news1, 
      alt: 'News 1', 
      title: 'Hanuven Healthcare Products Private Limited Receives Funding Support from Startup Punjab',
      content: 'Hanuven Healthcare Products Private Limited is proud to announce that we have been granted ₹3 lakhs in funding support from Startup Punjab...'
    },
    { 
      src: news2, 
      alt: 'News 2', 
      title: 'Hanuven Healthcare Products Private Limited Secures Seed Funding and Expands R&D Capabilities',
      content: 'Hanuven Healthcare Products Private Limited is excited to announce that we have received seed funding from the "Startup India Seed Fund Scheme (SISFS)"...'
    },
    { 
      src: news3, 
      alt: 'News 3', 
      title: 'Hanuven Healthcare Products Private Limited Achieves Top Honors at Startup Himachal Hackathon',
      content: 'We are thrilled to announce that Hanuven Healthcare Products Private Limited has been named the first-place winner at the Startup Himachal Hackathon...'
    },
    { 
      src: news4, 
      alt: 'News 4', 
      title: 'News Title 4',
      content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
  ];

  const openPopup = (news) => {
    setSelectedNews(news);
  };

  const closePopup = () => {
    setSelectedNews(null);
  };

  return (
    <section className="py-16 bg-white" id="news">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Latest News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {newsItems.map((item, index) => (
            <div 
              key={index} 
              className="cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => openPopup(item)}
            >
              <img src={item.src} alt={item.alt} className="w-full h-52 object-cover rounded-lg" />
            </div>
          ))}
        </div>
        <button className="block mx-auto bg-blue-600 text-white py-2 px-6 rounded-lg transition hover:bg-blue-500">
          View all news
        </button>
      </div>

      {selectedNews && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50" onClick={closePopup}>
          <div className="bg-white p-6 rounded-lg w-11/12 md:w-3/4 lg:w-2/3 max-h-90vh overflow-auto relative" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-2 right-4 text-3xl font-bold text-gray-700" 
              onClick={closePopup}
            >
              &times;
            </button>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <img src={selectedNews.src} alt={selectedNews.alt} className="w-full h-auto rounded-lg" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">{selectedNews.title}</h3>
                <p className="leading-relaxed">{selectedNews.content}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default LatestNews;
