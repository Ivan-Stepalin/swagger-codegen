import {randUuid, randFullName, randUrl, rand} from "@ngneat/falso"

export const mockFindPetsByStatus = () => {
	const arr = []
	for (let i = 0; i < 10; i++) {
		arr.push({
			id: randUuid(),
			category: {
				id: randUuid(),
				name: randFullName(),
			},
			name: randFullName(),
			photoUrls: [randUrl()],
			tags: [
				{
					id: randUuid(),
					name: randFullName(),
				},
			],
			status: rand(["avaliable", "pending", "sold"]),
		})
	}
	return arr
}
