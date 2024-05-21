import React from "react";

const ProfileBio = ({ currentProfile }) => {
  return (
    <div>
      <div>
        {currentProfile?.tags.length !== 0 ? (
          <>
            <h4 style={{ color: "white" }}>Tags used</h4>
            {currentProfile?.tags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </>
        ) : (
          <p style={{ color: "white" }}>0 tags used</p>
        )}
      </div>
      <div>
        {currentProfile?.about ? (
          <>
            <h4 style={{ color: "white" }}>About</h4>
            <p>{currentProfile?.about}</p>
          </>
        ) : (
          <p style={{ color: "white" }}>No bio found</p>
        )}
      </div>
    </div>
  );
};

export default ProfileBio;
