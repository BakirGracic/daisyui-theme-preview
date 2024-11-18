export default function ExplanatoryTitle({ title }: { title: string }) {
    return (
        <div className="prose mb-3 mt-5">
            <h3>{title}</h3>
        </div>
    );
}
