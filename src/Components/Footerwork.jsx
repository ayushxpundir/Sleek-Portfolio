
import Links from "./Links";


function Footerwork() {
    return (
        <>
            <section>
                <div className="foot-last">
                    <div className="hr-line">
                        <hr />
                    </div>
                    <div className="last-time">
                        <div className="lastext">
                            <p>{new Date().getFullYear()} &copy; Ayush Pundir</p>
                        </div>
                        <div className="lastlink">
                            <Links/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footerwork