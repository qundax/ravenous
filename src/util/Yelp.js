const apiKey = 'giuQ1Rhf-9_5oWmuaOKnGGir-PJPx8yqrMrTdJE5_Lq_v0JyGhuKMfWWDoSUYi1E1o99hK04A7ZhVX4ALli_WRS-kyJwtuHHbsgnVxgSzaHR9eBZ2xaD4QxEn0-pX3Yx';

export const Yelp = {
  search: function(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, { headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json', 'Accept': 'application/json' } })
      .then((response) => {
        return response.json()
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.lcoation.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count
            }
          })
        }
      })
  }
};