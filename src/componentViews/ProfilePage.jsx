import React, { useEffect, useRef } from 'react'
import { stopUndefined } from 'utils'
// reactstrap components
import { Card, CardHeader, CardBody, Container, Row, Col } from 'reactstrap'
// core components
import { ExportMultiOrganisms } from 'componentpMultiOrganisms'

const {
	Footer,
	CarouselCommonPropedProfile,
	ButtonsSocialPropedStreams,
	FormProfile,
	RatingProfile,
	ButtonAddToCartPropedProfile,
	QuantityProfile,
	ContainerTitledPropedDefault,
} = stopUndefined(ExportMultiOrganisms)

const ProfilePage = props => {
	const wrapper = useRef(null)

	useEffect(() => {
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		wrapper.current.scrollTop = 0
		document.body.classList.add('profile-page')
		return () => {
			document.body.classList.remove('profile-page')
		}
	}, [])

	// const onExiting = () => {
	// 	animating.value = true
	// }

	// const onExited = () => {
	// 	animating.value = false
	// }

	// const next = () => {
	// 	if (animating.value) return
	// 	// const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
	// 	// setActiveIndex(nextIndex)
	// }

	// const previous = () => {
	// 	if (animating.value) return
	// 	// const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
	// 	// setActiveIndex(nextIndex)
	// }

	// const goToIndex = newIndex => {
	// 	if (animating.value) return
	// 	setActiveIndex(newIndex)
	// }
	return (
		<div className='wrapper' ref={wrapper}>
			<div className='page-header'>
				<img alt='...' className='dots' src={require('assets/img/dots.png')} />
				<img alt='...' className='path' src={require('assets/img/path4.png')} />
				<Container className='align-items-center'>
					<Row>
						<Col className='ml-auto mr-auto' lg='4' md='6'>
							<Card className='card-coin card-plain'>
								<CardHeader>
									<img
										alt='...'
										className='img-center img-fluid rounded-circle'
										src={require('assets/img/mike.jpg')}
									/>
									<h3 className='title'>Mike Scheinder</h3>
									<p className='text-muted text-center'>@mighty_mike</p>
									{/* Social icons */}
									<Row className='btn-wrapper profile justify-content-center pt-3'>
										<ButtonsSocialPropedStreams />
									</Row>
								</CardHeader>
								<CardBody>
									{/* Biography */}
									<p className='profile-description'>
										A veteran in MOBA and FPS games, I can give you a
										significant boost in ranking mode.
									</p>
								</CardBody>
							</Card>
						</Col>
						<Col lg='8' md='6'>
							<ContainerTitledPropedDefault>
								<Row>
									<Col md={{ size: 6, offset: 1 }} className='py-2'>
										<RatingProfile />
									</Col>
								</Row>
								<Row>
									<Col md={{ size: 6, offset: 1 }} className='pt-2'>
										<h2>$30/h</h2>
									</Col>
								</Row>
								<Row>
									<Col md={{ size: 11, offset: 1 }} className='pb-2'>
										<h4>Description</h4>
										<p>
											Lorem ipsum dolor sit amet consectetur, adipisicing elit.
											Optio nulla quos reiciendis praesentium. Reiciendis quod
											dignissimos et quasi sequi. Placeat quaerat iusto
											reprehenderit quia inventore recusandae nihil voluptas
											reiciendis numquam?
										</p>
									</Col>
								</Row>
								<Row>
									<Col md={{ size: 5, offset: 1 }} className='py-2'>
										<QuantityProfile />
									</Col>
									<Col md={{ size: 6 }} className='py-2'>
										<FormProfile />
									</Col>
								</Row>
								<Row>
									<Col md={{ size: 5, offset: 1 }} className='py-2'>
										<ButtonAddToCartPropedProfile />
									</Col>
								</Row>
							</ContainerTitledPropedDefault>
						</Col>
					</Row>
				</Container>
			</div>
			<section className='section'>
				<Container>
					<Row>
						<Col
							xs={{ size: 6, offset: 4 }}
							sm={{ size: 6, offset: 5 }}
							md={{ size: 6, offset: 5 }}>
							<h1>Images</h1>
						</Col>
					</Row>
					<Row>
						<Col md='12'>
							<CarouselCommonPropedProfile />
						</Col>
					</Row>
				</Container>
			</section>
			<Footer />
		</div>
	)
}

export { ProfilePage }
