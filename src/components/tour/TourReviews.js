export default function TourReviews({ reviews, qna, rating, reviewCount }) {
  return (
    <>
      {/* Reviews Section */}
      <div className="td-reviews" id="section-reviews">
        <h2 className="td-section-title">Đánh giá</h2>
        {rating && (
          <div className="td-reviews__summary">
            <span className="td-reviews__score">{rating}</span>
            <span className="td-reviews__label">/ 10 — {reviewCount} đánh giá</span>
          </div>
        )}

        <div className="td-reviews__list">
          {reviews && reviews.length > 0 ? reviews.map((r, i) => (
            <div key={i} className="td-reviews__item">
              <div className="td-reviews__item-header">
                <span className="td-reviews__item-score">{r.score}</span>
                <div>
                  <strong className="td-reviews__name">{r.name}</strong>
                  <span className="td-reviews__date">{r.date}</span>
                </div>
              </div>
              <p className="td-reviews__text">{r.text}</p>
            </div>
          )) : (
            <p className="td-reviews__empty">Chưa có đánh giá nào cho tour này.</p>
          )}
        </div>
      </div>

      {/* QnA Section */}
      <div className="td-qna" id="section-qna">
        <h2 className="td-section-title">Hỏi đáp</h2>
        {qna && qna.length > 0 ? (
          <div className="td-qna__list">
            {qna.map((item, i) => (
              <div key={i} className="td-qna__item">
                <div className="td-qna__question">
                  <span className="td-qna__q-icon">Q</span>
                  <p>{item.q}</p>
                </div>
                <div className="td-qna__answer">
                  <span className="td-qna__a-icon">A</span>
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="td-reviews__empty">Chưa có câu hỏi nào. Hãy gửi câu hỏi cho chúng tôi!</p>
        )}
      </div>
    </>
  );
}
