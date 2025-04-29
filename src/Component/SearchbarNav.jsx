import React from 'react';

const SearchbarNav = () => {
  return (

    <section className="search-bar">


      <div className="searching">
        <img alt='rapius-logo' className="search-icon" src="data:image/png;base64,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" />
      </div>
      <input type="text" placeholder="Search Function or Document" />
      <div className='header-icon'>
        <div className="icon">
          <img src="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/cpkj9bmgebk7oco7iljn" alt="Icon" />
        </div>
        <div className="icon">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUwntgGHiwq041i65fVbL_pSp_vu82_g3ebTSRrxzm9ZjAzeoG6wQsKiThR-I6AqSkCHY&usqp=CAU" alt="Icon" />
        </div>
        <div className="icon">
          <img src="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/g3oe4f7mqmgjxzaqu30x" alt="Icon" />
        </div>
        <div className="icon">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/033/294/065/small_2x/green-exclamation-mark-icons-in-line-style-danger-alarm-caution-risk-business-concept-hazard-warning-attention-sign-with-exclamation-mark-symbol-vector.jpg" alt="Icon" />
        </div>
      </div>

      <div className="my-online-dropdown">
        My Online
      </div>

    </section>
  )
}
export default SearchbarNav;