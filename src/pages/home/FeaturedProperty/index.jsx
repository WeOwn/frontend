import React from "react";
import Button from "../../../Atoms/Button";
import PropertyCard from "../../../Atoms/PropertyCard";

const FeaturedProperty = () => {
  //make api call to fetch featured properties

  return (
    <div>
      <div>Featured Properties</div>
      <div>
        <span>
          Explore our handpicked selection of featured properties. Each listing
          offers a glimpse into exceptional homes and investments available
          through Estatein. Click "View Details" for more information.
        </span>
        <Button>View All Properties</Button>
      </div>
      <div>
        <PropertyCard
          imgUrl="https://s3-alpha-sig.figma.com/img/597f/545b/cb329f29999c8c335bec608731f34db8?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eeugMeKG-TRvIpxiE2XrQmGmrSS36fijfbRQESG0PZPaVMR1G1GpMKl9GdqV5803eQuk0df1R7sweZNpeMy0MYlh2YyvJH8S9RfahuTcxLavwlSIcFT~A8u-wrLQ1eMC3LYbX9gPwur~5JJGthhJyEOWbuKKliZmFrmrFPN3idpPzZwZrSfaZyM3CTYtA5GCtlec2DIKQnavhsqDNXPI2bXxddJ6ONtjSrBerMuxImtLmlw~PsEqZqmctVDeVCTftPMNnAEeQXC9SbM0IuGK4uxIHp1-CmVIc-HVZkpXup8Qfbtygo1pwt1XJ9N3LYfTuLBj2lOWxnKA74qQGyWY6g__"
          label={"Seaside Serenity Villa"}
          description={
            "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... Read More"
          }
                  
                  
        />
      </div>
    </div>
  );
};

export default FeaturedProperty;
