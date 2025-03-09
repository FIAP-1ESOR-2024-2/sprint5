import { SmileySad } from "@phosphor-icons/react"

function NotFoundPage() {
    return (
        <>
            <div className="d-flex align-items-center justify-content-center">
                <div className="row">
                    <div>
                        <SmileySad />
                        <strong>404</strong>
                    </div>
                    <strong>PÁGINA NÃO ENCONTRADA</strong>
                    
                </div>
            </div>
        </>
    )
}

export default NotFoundPage