import { useEffect, useRef } from 'react'

//https://github.com/ryanto/click-outside-to-close-video

export const useClickOutside = (handler) => {
	const domNode = useRef()

	useEffect(() => {
		let maybeHandler = (event) => {
			if (domNode.current && !domNode.current.contains(event.target)) {
				handler()
			}
		}

		document.addEventListener('mousedown', maybeHandler)

		return () => {
			document.removeEventListener('mousedown', maybeHandler)
		}
	})

	return domNode
}
