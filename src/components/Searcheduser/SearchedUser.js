import React from "react";
import  "./SearchedUser.css";

function SearchedUser({data}) {
	return (
		<div className="data_container">
		{Object.keys(data).length > 0 && <div className="each_user">
				<a href={data.html_url} target='_blank'>
					<img src={data.avatar_url} alt="user_avatar" />
					<p>{data.login}</p>
				</a>
			</div> }
		</div>
	)
}

export default SearchedUser;


