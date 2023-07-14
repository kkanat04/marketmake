import './OwnAssets.css';

import React from 'react';

import {OwnAsset as IOwnAsset} from '../../../interface/IActivityWallets';

type Props = {
	data?: IOwnAsset[]
}

const OwnAssets = ({data}: Props) => {
	if (!data?.length) return <></>;

	return (

		<div className="main_OwnAssets_div">
			<p>Own assets</p>
			<div className="main_OwnAssets">
				{
					data?.map((el,i) => (
						<a target={'_blank'} href={`https://opensea.io/assets/ethereum/${el?.contractAddress}/${el.tokenId}`} key={i} rel="noreferrer">
							<h2>{el?.name}</h2>
							<img width={250} height={250} src={el?.imageUrl} />
							<div>
								<p>{el?.lastAction?.tradeType}</p>
								<p>{el?.lastAction?.price}</p>
							</div>
						</a>
					))
				}
			</div>
		</div>
	);
};

export default OwnAssets;
