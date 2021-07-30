import React, { useState } from 'react';

export const UncontrolledOnboardingFlow = ({ children, onFinish }) => {
	const [onboardingData, setOnboardingData] = useState({});
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToNext = stepData => {
		setCurrentIndex(currentIndex + 1);
	}

	const currentChild = React.Children.toArray(children)[currentIndex];

	if (React.isValidElement(currentChild)) {
		return React.cloneElement(currentChild, { goToNext });
	}

	return currentChild;
}