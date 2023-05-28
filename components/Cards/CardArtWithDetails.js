import React,{ useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { gql, useQuery } from "@apollo/client";

const GET_ALL_ARTS = gql`
query GetArt($id: uuid!){
  street_arts_by_pk(id:$id) {
    id
    title
    address
    country
    city
    created_at
    is_approved
    description
    pictures{
      link
    }
    user{
      first_name
      last_name
    }
  }
  
}
`;


const Cardartwithdetails = (props) => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery(GET_ALL_ARTS, {
    variables: { id },
  });
  const [art, setArt] = useState(null);

  useEffect(() => {
    if (data && data.street_arts_by_pk) {
      setArt(data.street_arts_by_pk);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred while fetching art details</div>;
  }

  const arts = data?.street_arts_by_pk;
    const comments = [
        {
          id: 1,
          name: 'salwa',
          content: 'Great job ',
          Image: 'img/profile.jpg'
        },
        {
          id: 2,
          name: 'ahmad ',
          content: 'I did not like it !',
          Image: 'img/logo.png'
        },
        {
          id: 3,
          name: 'oumaima ',
          content: 'Amazing ',
          Image: 'img/profile.jpg'
        },
      ];

      const navigateToLocation = (address, latitude, longitude) => {
        const zoomLevel = 14;
        let mapUrl = '';
        if (typeof window !== 'undefined') {
          if (address) {
            const encodedAddress = encodeURIComponent(address);
            mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
          } else if (latitude && longitude) {
            mapUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}&zoom=${zoomLevel}`;
          }
    
          if (mapUrl) {
            window.open(mapUrl, '_blank');
          }
        }
      }
    
      
  return (
    <div className="flex items-center justify-center h-screen w-700 h-700">
      <div className="flex bg-white lg:w-9/12 rounded-lg shadow-lg">
        <div className="w-1/2">
          <img src={arts && arts.pictures && arts.pictures[0] && arts.pictures[0].link} alt="Your Image" className="w-full h-full object-cover" />
        </div>
        <div className="w-1/2 bg-white p-2"> 

          <div  className="flex items-center">
            <img src="img/profile.jpg" className="w-12 h-12  rounded-full"></img>
            <div className="ml-4 p-8">
              <h2 className="text-lg font-bold">{arts && arts.user && arts.user[0] && arts.user[0].first_name } </h2>
              <h2 className="text-lg "> {arts.country}{arts.city}</h2>
            </div>  
          </div>

          <div className="mt-4 ">
            <button className="text-blueGray-500 bg-transparent border border-solid border-blueGray-500 hover:bg-blueGray-500 hover:text-white active:bg-blueGray-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
              onClick={() => navigateToLocation('Budapest, Régi posta utca 4, 1052 Magyarország')}>
              <i className="fas fa-map-marker" aria-hidden="true"> </i>
              Navigate
            </button>
          </div>

          <div className="mt-4 ">
              <p className="text-gray-600">{arts.description}</p>
            </div>
          
          <div className="mt-8">
          <div className="mt-4">
            <button className="p-2 text-2xl text-gray-100 fas fa-heart rounded-md px-4 py-1 mr-2 focus:outline-none mb-1 ease-linear transition-all duration-150"></button>
            <button className=" p-2 text-2xl fas fa-comment text-gray-100 rounded-md px-4 py-1 mr-2 focus:outline-none mb-1 ease-linear transition-all duration-150"> 
            </button>
            <button className=" p-2 text-2xl fas fa-share text-gray-100 rounded-md px-4 py-1 mr-2 focus:outline-none mb-1 ease-linear transition-all duration-150"> 
            </button>
            <h1 className="text-gray-600 mb-2" >100 likes</h1>
          </div>
            <div className="border-t border-gray-300 pt-4">
            {comments.length === 0 ? (
                <p>No comments yet.</p>
              ) : (
                <ul className="space-y-4">
                  {comments.map((comment) => (
                    <li key={comment.id} className="flex items-center">
                      <img src={comment.Image} className="w-8 h-8  rounded-full"></img>
                      <div className="ml-2">
                        <h4 className="text-sm font-bold">{comment.name}</h4>
                        <p className="text-gray-600">{comment.content}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="mt-4">
              <div className="flex items-center">
              <img src="img/profile.jpg" className="w-8 h-8  rounded-full"></img>
              <textarea
                  className="flex-grow px-4 py-2 ml-2 border-none outline-none bg-transparent"
                  rows={3}
                placeholder="Add a comment..."
              
              />
                 <button className="text-blue-500 font-semibold bg-transparent border-none">
                    Post
                </button>
              </div>
              
              
            </div>


          </div>
        </div>
      </div>
    </div>


     
       
  );
};

export default Cardartwithdetails;
