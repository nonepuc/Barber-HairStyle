import { ref, onMounted, onUnmounted } from 'vue'

export function useHeader() {
    const isMenuOpen = ref(false)
    const showScrollTop = ref(false)

    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value
    }

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
            isMenuOpen.value = false
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        isMenuOpen.value = false
    }

    const checkScroll = () => {
        // Показываем кнопку, когда прокрутка больше высоты header (примерно 100px)
        showScrollTop.value = window.scrollY > 100
    }

    onMounted(() => {
        window.addEventListener('scroll', checkScroll)
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', checkScroll)
    })

    return {
        isMenuOpen,
        showScrollTop,
        toggleMenu,
        scrollToSection,
        scrollToTop
    }
}
