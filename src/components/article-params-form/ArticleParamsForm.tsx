import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { useRef, useState } from 'react';
import clsx from 'clsx';
import { useOutsideClickClose } from '../select/hooks/useOutsideClickClose';

export const ArticleParamsForm = () => {
	const [isFormOpen, setIsFormOpen] = useState(false);

	const rootRef = useRef<HTMLDivElement>(null);

	const toggleForm = () => setIsFormOpen(!isFormOpen);

	useOutsideClickClose({
		isOpen: isFormOpen,
		rootRef,
		onChange: setIsFormOpen,
	});

	return (
		<div ref={rootRef}>
			<ArrowButton onClick={toggleForm} isOpen={isFormOpen} />
			<aside
				className={clsx(styles.container, isFormOpen && styles.container_open)}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</div>
	);
};
