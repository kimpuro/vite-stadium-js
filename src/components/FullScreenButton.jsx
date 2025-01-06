import useStore from "../store/useStore.js";
export default function FullScreenButton() {
    const toggleActive = useStore((state) => state.toggleActive)
    return (
        <>
                <button style={{position: 'absolute', top:50, right: 50, fontSize: '13px'}} className='button-custom'
                onClick={toggleActive}>
                    보기 모드 전환
                </button>
        </>
    )
}