import Link from '../shared/link';
import Card from '../card';

export default function SimilarExams({ similarExam, id }) {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3>Other public exams</h3>
                <Link link="/public-exams">See More</Link>
            </div>

            {similarExam.map(
                (content, index) =>
                    index <= 3 &&
                    id != content.id && (
                        <div key={index} style={{ marginBottom: 10 }}>
                            <Card {...content} color={false} />
                        </div>
                    )
            )}
        </div>
    );
}
